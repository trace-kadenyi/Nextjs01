type Filetree = {
  "tree": [
    {
      "path": string
    }
  ]
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    "https://api.github.com/repos/gitdagray/test-blogposts/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GTIHUB_TOKEN}`,
        "x-Github-Api-Version": "2022-11-28",
      },
    }
  );

  if(!res.ok) return undefined
}


// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { remark } from "remark";
// import html from "remark-html";

// const postsDirectory = path.join(process.cwd(), "blogposts");

// // get sorted post data
// export function getSortedPostsData() {
//   // get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     // remove .md from file name to get id
//     const id = fileName.replace(/\.md$/, "");

//     // read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     // use gray matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     const blogPost: BlogPost = {
//       id,
//       title: matterResult.data.title,
//       date: matterResult.data.date,
//     };

//     return blogPost;
//   });
//   return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
// }

// // get post data
// export async function getPostData(id: string) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   const matterResult = matter(fileContents);

//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);

//   const contentHtml = processedContent.toString();

//   const blogPostWithHtml: BlogPost & { contentHtml: string } = {
//     id,
//     title: matterResult.data.title,
//     date: matterResult.data.date,
//     contentHtml,
//   };

//   return blogPostWithHtml;
// }