// note(roy): Without a defined matcher, this one line applies
// next-auth to the entire project.
export { default } from "next-auth/middleware";

// note(roy): applies next-auth only to matching routes - can be
// regex.
//
// note(roy): check /server & / pages for examples of manual protection
//
// docs(roy): https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths
export const config = {
  matcher: ["/extra", "/dashboard"],
};
