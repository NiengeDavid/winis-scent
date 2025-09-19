import { defineField, defineType } from "sanity";
import { ShoppingCart } from "lucide-react";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: ShoppingCart,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(100).warning("Keep the title concise."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "percentageOff",
      title: "Percentage Off",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100).precision(2),
    }),
    defineField({
      name: "reviewStars",
      title: "Review Stars",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5).precision(1),
    }),
    defineField({
      name: "currentPrice",
      title: "Current Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "formerPrice",
      title: "Former Price",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "freeDeliveryAvailable",
      title: "Free Delivery Available",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "promoCode",
      title: "Promo Code",
      type: "object",
      fields: [
        defineField({
          name: "code",
          title: "Code",
          type: "string",
        }),
        defineField({
          name: "percentageOff",
          title: "Percentage Off",
          type: "number",
          validation: (Rule) => Rule.min(0).max(100).precision(2),
        }),
      ],
    }),
    defineField({
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "block-content",
    }),
    defineField({
      name: "additionalInformation",
      title: "Additional Information",
      type: "array",
      of: [
        defineField({
          name: "category",
          title: "Category",
          type: "object",
          fields: [
            defineField({
              name: "field",
              title: "Field",
              type: "string",
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
});
