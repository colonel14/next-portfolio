import { defineField, defineType } from "sanity";

export default defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
    defineField({
      name: "desc",
      title: "Desc",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "icon",
    },
  },
});
