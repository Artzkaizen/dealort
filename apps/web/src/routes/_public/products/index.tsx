import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpAZIcon, ListFilter } from "lucide-react";
import { useMemo, useState } from "react";
import {
  ProductCard,
  ProductCardCategory,
  ProductCardCommentAndImpressionCount,
  ProductCardDetails,
  ProductCardLaunchInfo,
  ProductCardLogo,
  ProductCardRateAndReview,
  ProductCardTimeAndDuration,
} from "@/components/product-card";
// SHADCN components (adjust paths to match your project)
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// categories array from utils/constants
import { categories as allCategories } from "@/utils/constants";
import {
  sampleComments as comments,
  sampleProducts as products,
  sampleReviews as reviews,
} from "@/utils/dummy";

export const Route = createFileRoute("/_public/products/")({
  component: RouteComponent,
});

type SortMode = "newest" | "top" | "trending";

function RouteComponent() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categorySearch, setCategorySearch] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("newest");

  // compute counts of categories from products
  const categoryCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of allCategories) {
      map.set(c, 0);
    }
    for (const p of products) {
      for (const cat of p.category || []) {
        map.set(cat, (map.get(cat) || 0) + 1);
      }
    }
    return map;
  }, []);

  const toggleCategory = (category: string) =>
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );

  // filtered then sorted products
  const visibleProducts = useMemo(() => {
    const filtered = products.filter((p) => {
      if (selectedCategories.length === 0) return true;
      return selectedCategories.some((c) => (p.category || []).includes(c));
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortMode === "newest") {
        const ta = new Date(a.createdAt).getTime();
        const tb = new Date(b.createdAt).getTime();
        return tb - ta;
      }

      if (sortMode === "top") {
        // top by rating then impressions
        const ra = a.rating ?? 0;
        const rb = b.rating ?? 0;
        if (rb !== ra) return rb - ra;
        return (b.impressions ?? 0) - (a.impressions ?? 0);
      }

      // trending: impressions then createdAt
      if (sortMode === "trending") {
        const ia = a.impressions ?? 0;
        const ib = b.impressions ?? 0;
        if (ib !== ia) return ib - ia;
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }

      return 0;
    });

    return sorted;
  }, [selectedCategories, sortMode]);

  const upcomingLaunchProducts = useMemo(() => {
    const now = Date.now();
    return products
      .filter((p) => {
        if (!p.launchDate) return false;
        const launchTs = new Date(p.launchDate).getTime();
        return launchTs > now;
      })
      .sort(
        (a, b) =>
          new Date(a.launchDate ?? "").getTime() -
          new Date(b.launchDate ?? "").getTime()
      );
  }, []);

  // categories to show filtered by search
  const categoriesToShow = useMemo(() => {
    const q = categorySearch.trim().toLowerCase();
    return allCategories.filter((c) => c.toLowerCase().includes(q));
  }, [categorySearch]);

  return (
    <main>
      <section className="relative min-h-[40vh]">
        <div className="relative z-10 flex flex-col items-center justify-center py-10">
          <h1 className="text-center font-bold text-2xl sm:text-4xl">
            &bull; Explore Products &bull;
          </h1>
          <p className="mt-4 max-w-2xl text-center text-muted-foreground text-sm sm:text-base">
            Discover a curated selection of innovative products designed by
            industry experts to solve real-world problems and enhance your
            development workflow.
          </p>
        </div>
      </section>

      <hr />

      <section className="grid-cols-7 md:grid">
        <main className="col-span-4 flex flex-col space-y-3 px-2 lg:col-span-5">
          <div className="flex w-full items-center justify-between gap-2 pt-3">
            <h3 className="max-sm:text-xs">
              {sortMode === "trending" && "Trending Products"}
              {sortMode === "top" && "Top Performing Products"}
              {sortMode === "newest" && "Recent Products"}
            </h3>

            <div className="space-x-2">
              {/* Categories filter (shadcn combobox = Popover + Command) */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="text-xs"
                    variant={selectedCategories.length ? "default" : "outline"}
                  >
                    <ListFilter />
                    {selectedCategories.length
                      ? `Tags (${selectedCategories.length})`
                      : "Tags"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-[300px] p-2">
                  <Command>
                    <CommandInput
                      onValueChange={(v: string) => setCategorySearch(v)}
                      placeholder="Search feature tags..."
                      value={categorySearch}
                    />
                    <CommandList>
                      <CommandEmpty>No results.</CommandEmpty>

                      {/* Selected group */}
                      <CommandGroup heading="Selected">
                        {selectedCategories.length === 0 ? (
                          <div className="px-2 py-1 text-muted-foreground text-sm">
                            No selected tags
                          </div>
                        ) : (
                          selectedCategories.map((cat) => (
                            <CommandItem
                              key={cat}
                              onSelect={() => {
                                toggleCategory(cat);
                              }}
                            >
                              <div className="flex w-full items-center justify-between">
                                <span>{cat}</span>
                                <span className="text-muted-foreground text-sm">
                                  ({categoryCounts.get(cat) ?? 0})
                                </span>
                              </div>
                            </CommandItem>
                          ))
                        )}
                      </CommandGroup>

                      {/* Available categories group */}
                      <CommandGroup heading="Categories">
                        {categoriesToShow
                          .filter((c) => !selectedCategories.includes(c))
                          .map((cat) => (
                            <CommandItem
                              key={cat}
                              onSelect={() => {
                                toggleCategory(cat);
                              }}
                            >
                              <div className="flex w-full items-center justify-between">
                                <span>{cat}</span>
                                <span className="text-muted-foreground text-sm">
                                  ({categoryCounts.get(cat) ?? 0})
                                </span>
                              </div>
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              {/* Sort popover */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="text-xs" variant="outline">
                    <ArrowUpAZIcon />
                    Sort
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-[200px] p-2">
                  <div className="flex flex-col gap-1">
                    <Button
                      className={`rounded px-2 py-1 text-left ${sortMode === "newest" ? "bg-muted text-muted-foreground" : ""}`}
                      onClick={() => setSortMode("newest")}
                      variant="ghost"
                    >
                      Newest
                    </Button>
                    <Button
                      className={`rounded px-2 py-1 text-left ${sortMode === "top" ? "bg-muted text-muted-foreground" : ""}`}
                      onClick={() => setSortMode("top")}
                      variant="ghost"
                    >
                      Top products
                    </Button>
                    <Button
                      className={`rounded px-2 py-1 text-left ${sortMode === "trending" ? "bg-muted text-muted-foreground" : ""}`}
                      onClick={() => setSortMode("trending")}
                      variant="ghost"
                    >
                      Trending
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            {visibleProducts.map((product) => {
              const productReviews = reviews.filter(
                (reply) => reply.productId === product?.id
              );

              const productComments = comments.filter(
                (comment) => comment.productId === product?.id
              );

              return (
                <ProductCard className="rounded-lg" key={product.id}>
                  <div className="flex justify-between gap-4 max-sm:flex-wrap">
                    <div className="flex items-start gap-1">
                      <ProductCardLogo
                        logo={product.logo || ""}
                        name={product.name}
                      />
                      <div className="flex flex-col gap-px">
                        <ProductCardDetails
                          name={product.name}
                          tagline={product.tagline}
                        />
                        <ProductCardRateAndReview
                          rating={product.rating}
                          reviewsCount={productReviews.length}
                        />
                        <ProductCardCategory
                          category={product.category}
                          className="mt-2 flex-wrap"
                        />

                        <ProductCardLaunchInfo
                          launchDate={product.launchDate || ""}
                        />

                        <ProductCardTimeAndDuration
                          createdAt={product.createdAt}
                        />
                      </div>
                    </div>

                    <ProductCardCommentAndImpressionCount
                      commentCount={productComments.length}
                      impressions={product.impressions}
                    />
                  </div>
                </ProductCard>
              );
            })}
          </div>
        </main>

        <aside className="col-span-3 flex flex-col space-y-8 border-l px-2 max-md:hidden lg:col-span-2">
          <h1 className="pt-3">Launch Announcements</h1>

          <div className="flex flex-col space-y-2">
            {upcomingLaunchProducts.length === 0 && (
              <div className="text-muted-foreground text-sm">
                No upcoming launches
              </div>
            )}
            {upcomingLaunchProducts.map((product) => (
              <ProductCard className="rounded-lg" key={product.id}>
                <div className="flex justify-between gap-4">
                  <div className="flex items-start gap-1">
                    <ProductCardLogo
                      logo={product.logo || ""}
                      name={product.name}
                    />
                    <div className="flex flex-col gap-px">
                      <ProductCardDetails
                        className="[&>a]:text-xs [&>p]:text-[10px]"
                        name={product.name}
                        tagline={product.tagline}
                      />
                      <ProductCardLaunchInfo
                        launchDate={product.launchDate || ""}
                      />
                    </div>
                  </div>
                </div>
              </ProductCard>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
