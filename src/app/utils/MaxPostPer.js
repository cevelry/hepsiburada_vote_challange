import { PAGEITEMSIZE } from "./Contants";

export const MaxPostPer = (links, page) => links.slice(Math.max(0, PAGEITEMSIZE * (page - 1)), Math.min(PAGEITEMSIZE * page, links.length))
