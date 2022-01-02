export default {
  name: "pin",
  title: "Pin",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "about",
      title: "About",
      type: "string",
    },

    {
      name: "destination",
      title: "Destination",
      type: "url",
    },

    {
      name: "category",
      title: "Category",
      type: "string",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, //enables the user interface for selectiong what areas of an image should always be cropped.
      },
    },

    {
      name: "userId",
      title: "UserId",
      type: "string",
    },

    {
      name: "postedBy",
      title: "PostedBy",
      type: "postedBy",
    },

    {
      name: "save",
      title: "Save",
      type: "array",
      of: [{ type: "save" }],
    },

    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "comment" }],
    },
  ],
};
