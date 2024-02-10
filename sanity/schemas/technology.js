import { defineField, defineType } from "sanity";

export default defineType({
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "bgColor",
      title: "BgColor",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "name",
    },
  },
});
