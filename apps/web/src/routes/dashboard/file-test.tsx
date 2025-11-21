import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { CloudUpload, X } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadList,
  FileUploadTrigger,
} from "@/components/ui/file-field";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const Route = createFileRoute("/dashboard/file-test")({
  component: RouteComponent,
});

const formSchema = z.object({
  files: z
    .array(z.custom<File>())
    .min(1, "Please select at least one file")
    .max(1, "Please select up to 2 files")
    .refine((files) => files.every((file) => file.size <= 5 * 1024 * 1024), {
      message: "File size must be less than 5MB",
      path: ["files"],
    }),
});

type FormValues = z.infer<typeof formSchema>;

function RouteComponent() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      files: [],
    },
  });

  const onSubmit = React.useCallback((data: FormValues) => {
    toast("Submitted values:", {
      description: (
        <pre className="mt-2 w-80 rounded-md bg-accent/30 p-4 text-accent-foreground">
          <code>
            {JSON.stringify(
              data.files.map((file) =>
                file.name.length > 25
                  ? `${file.name.slice(0, 25)}...`
                  : file.name
              ),
              null,
              2
            )}
          </code>
        </pre>
      ),
    });
  }, []);

  return (
    <Form {...form}>
      <form className="w-full max-w-md" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="files"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Attachments</FormLabel>
              <FormControl>
                <FileUpload
                  accept="image/*"
                  maxFiles={2}
                  maxSize={5 * 1024 * 1024}
                  multiple
                  onFileReject={(_, message) => {
                    form.setError("files", {
                      message,
                    });
                  }}
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <FileUploadDropzone className="flex-row flex-wrap border-dotted text-center">
                    <CloudUpload className="size-4" />
                    Drag and drop or
                    <FileUploadTrigger asChild>
                      <Button className="p-0" size="sm" variant="link">
                        choose files
                      </Button>
                    </FileUploadTrigger>
                    to upload
                  </FileUploadDropzone>
                  <FileUploadList>
                    {field.value.map((file, index) => (
                      <FileUploadItem key={index} value={file}>
                        <FileUploadItemPreview />
                        <FileUploadItemMetadata />
                        <FileUploadItemDelete asChild>
                          <Button
                            className="size-7"
                            size="icon"
                            variant="ghost"
                          >
                            <X />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </FileUploadItemDelete>
                      </FileUploadItem>
                    ))}
                  </FileUploadList>
                </FileUpload>
              </FormControl>
              <FormDescription>
                Upload up to 2 images up to 5MB each.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-4" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
