import Page from "@/components/page";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import formations from "./aboutList";

export default function About() {
  return (
    <Page>
      <Card id="card" className=" w-[730px]">
        <CardHeader>
          <CardTitle className=" grid grid-cols-[max-content_1fr] gap-4">
            <div className=" rounded-full w-fit border-2 border-(--border)">
              <img
                className="rounded-full h-[200px]"
                src="/projects/imgs/me.jpg"
                alt="Photo de Ramond Lucien"
              />
            </div>
            <div className=" grid grid-rows-2 h-[50%] my-auto items-center">
              <div className=" text-3xl">Ramond Lucien</div>
              <div className=" italic text-xl">
                <div>{"{ Développeur front-end }"}</div>
                <div>{"[ JS / TS / React / Vue.js ]"}</div>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className=" p-0 border-y border-(--border)">
          <div className=" p-4 border-b border-(--border)">
            {
              "Rigoureux et autonome, je suis impatient de mettre à profit mes compétences techniques nouvellement acquises. En constante recherche d’apprentissage, je suis enthousiaste à l’idée d’appréhender de nouveaux frameworks ou langages de programmation."
            }
          </div>
          <div className=" h-auto w-auto">
            <ScrollArea className=" h-[200px] w-full">
              <div className=" grid gap-2 py-4">
                {formations.map((formation) => {
                  return (
                    <div className="border rounded p-2 bg-(--card-foreground)/5">
                      <div className=" font-bold">{formation.name}</div>
                      <div className=" italic">{formation.date}</div>
                      <div>{formation.description}</div>
                    </div>
                  );
                })}
              </div>
              <ScrollBar />
            </ScrollArea>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Page>
  );
}
