import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Rating, RatingItem } from "./ui/rating";

export function ProductCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-purple-200 hover:shadow-md",
        className
      )}
      {...props}
    />
  );
}

interface ProductCardLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  logo: string;
}
export function ProductCardLogo({
  className,
  name,
  logo,
  ...props
}: ProductCardLogoProps) {
  return (
    <Avatar className={cn("size-10 rounded-sm", className)} {...props}>
      <AvatarImage className="rounded-sm!" src={logo} />
      <AvatarFallback className="rounded-sm!">{name.charAt(0)}</AvatarFallback>
    </Avatar>
  );
}

interface ProductCardDetailsProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  tagline: string;
}
export function ProductCardDetails({
  className,
  name,
  tagline,
  ...props
}: ProductCardDetailsProps) {
  return (
    <div className={cn("flex flex-col gap-px", className)} {...props}>
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="truncate text-muted-foreground text-sm">{tagline}</p>
    </div>
  );
}

interface ProductCardRateAndReviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  reviewsCount: number;
}
export function ProductCardRateAndReview({
  className,
  rating,
  reviewsCount,
  ...props
}: ProductCardRateAndReviewProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <Rating
        className="text-yellow-500 [&>svg]:size-3"
        defaultValue={rating}
        readOnly
        step={1}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <RatingItem className="size-2" key={i} />
        ))}
      </Rating>

      <span className="text-muted-foreground text-sm">
        {reviewsCount} reviews
      </span>
    </div>
  );
}
