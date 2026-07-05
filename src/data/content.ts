import { getCollection, type CollectionEntry } from "astro:content";

export type EntryCollection = "projects" | "studio" | "writing";

export type LocalizedEntry =
  | CollectionEntry<"projects">
  | CollectionEntry<"studio">
  | CollectionEntry<"writing">;

export async function getEntries(collection: EntryCollection) {
  const entries = await getCollection(collection);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getEntryPaths(collection: EntryCollection) {
  const entries = await getCollection(collection);
  return entries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

export function getEntryTags(entry: LocalizedEntry) {
  if (entry.collection === "projects") {
    return [entry.data.category, entry.data.status, ...entry.data.tags];
  }

  return [entry.data.kind, ...entry.data.tags];
}

export function getEntryKind(entry: LocalizedEntry) {
  if (entry.collection === "projects") {
    return entry.data.category;
  }

  return entry.data.kind;
}
