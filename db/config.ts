import { column, defineDb, defineTable } from "astro:db";

const Publication = defineTable({
  columns: {
    pubID: column.number({ primaryKey: true }), // Unique identifier for the publication
    title: column.text(), // Title of the publication
    description: column.text({ optional: true }), // Description of the publication
    additionalInfo: column.text({ optional: true }), // Additional information about the publication (i.e. authors, journal, etc.)
    category: column.text({ optional: true }), // Category of the publication (i.e. fact sheet, status report, research brief, report, journal, etc.)
    fullPath: column.text(), // Full Path of the publication (URL or local path)`
    dateAdded: column.date(), // Date the publication was added
  },
});

const Author = defineTable({
  columns: {
    authID: column.number({ primaryKey: true }), // Unique identifier for the author
    firstName: column.text(), // First name of the author
    lastName: column.text(), // Last name of the author
    midInitial: column.text(), // Middle initial of the author
  },
});

const PublicationAuthor = defineTable({
  columns: {
    pubAuthID: column.number(), // Unique identifier for the publication-author relationship
    pubID: column.number(), // Foreign key referencing the publication
    authID: column.number(), // Foreign key referencing the author
  },
});

// https://astro.build/db/config
export default defineDb({
  // tables: { Publication, Author, PublicationAuthor },
  tables: { Publication },
});
