import { defineField, defineType } from "sanity";
import { BookA } from "lucide-react";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: BookA,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
});
