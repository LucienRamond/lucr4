import Page from "@/components/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import works from "./works";

export default function Work() {
  return (
    <Page>
      <div className=" grid grid-cols-3 gap-4">
        {works.map((work) => {
          return (
            <Card
              className="w-full grid grid-rows-[fit-content_fit_content_fit-content] border-(--border) cursor-pointer hover:border-(--card-foreground) hover:bg-(--card-foreground)/10"
              onClick={() => work.url && window.open(work.url, "__blank")}
            >
              <CardHeader>
                <CardTitle>{work.name}</CardTitle>
                <CardDescription>{work.meta_description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 h-[300px] border-y border-(--border)">
                <img
                  className="object-cover h-full w-full"
                  src={`/projects/imgs/${work.img_name}`}
                  alt="Image du projet"
                />
              </CardContent>
              <CardFooter>{work.description}</CardFooter>
            </Card>
          );
        })}
      </div>
    </Page>
  );
}
