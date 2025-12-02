import Page from "@/components/page";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formations, experiences } from "./aboutList";
import TextedSeparator from "@/components/ui/texted-separator";

export default function About() {
  return (
    <Page>
      <Card id="card" className=" w-[730px]">
        <CardHeader>
          <CardTitle className=" grid grid-cols-2 items-center gap-4">
            <div className=" rounded-full mx-auto w-fit border-2 border-(--border)">
              <img
                className="rounded-full h-[200px]"
                src="/projects/imgs/me.jpg"
                alt="Photo de Ramond Lucien"
              />
            </div>
            <div className=" grid grid-rows-2 h-[50%] items-center">
              <div className=" text-3xl">Ramond Lucien</div>
              <div className=" italic text-xl">
                <div>{"{ Développeur front-end }"}</div>
                <div>{"[ JS / TS / React / Vue.js ]"}</div>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className=" p-0">
          <TextedSeparator title="Profil" />
          <div className=" p-4">
            {
              "Rigoureux et autonome, je suis impatient de mettre à profit mes compétences techniques nouvellement acquises. En constante recherche d’apprentissage, je suis enthousiaste à l’idée d’appréhender de nouveaux frameworks ou langages de programmation."
            }
          </div>
          <TextedSeparator title="Formations" />

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
          <TextedSeparator title="Parcours" />
          <div className=" grid gap-2 py-4">
            {experiences.map((experience) => {
              return (
                <div className="border rounded p-2 bg-(--card-foreground)/5">
                  <div className=" font-bold">{experience.name}</div>
                  <div className=" italic">{experience.date}</div>
                  <div>{experience.description}</div>
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Page>
  );
}
