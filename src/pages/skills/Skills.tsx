import Page from "@/components/page";
import {
  backend_skills,
  bdd_skills,
  frontend_skills,
  env_skills,
} from "./skillsList";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Skills() {
  const [selectedSkills, setSelectedSkills] = useState("tous");

  console.log(selectedSkills);

  return (
    <Page>
      <Select onValueChange={(value) => setSelectedSkills(value)}>
        <SelectTrigger className="min-w-[200px] mb-2">
          <SelectValue placeholder="Tous" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="tous">Tous</SelectItem>
            <SelectItem value="front">Développement frontend</SelectItem>
            <SelectItem value="back">Développement backend</SelectItem>
            <SelectItem value="bdd">Base de données</SelectItem>
            <SelectItem value="env">Environnement de travail</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="min-w-[50vw] grid gap-2 grid-cols-3">
        {selectedSkills == "front" &&
          frontend_skills.map((skill) => {
            return (
              <div className="border bg-blue-200 hover:bg-blue-300 rounded text-center p-2">
                {skill}
              </div>
            );
          })}
        {selectedSkills == "back" &&
          backend_skills.map((skill) => {
            return (
              <div className="border bg-blue-200 hover:bg-blue-300 rounded text-center p-2">
                {skill}
              </div>
            );
          })}
        {selectedSkills == "bdd" &&
          bdd_skills.map((skill) => {
            return (
              <div className="border bg-blue-200 hover:bg-blue-300 rounded text-center p-2">
                {skill}
              </div>
            );
          })}
        {selectedSkills == "env" &&
          env_skills.map((skill) => {
            return (
              <div className="border bg-blue-200 hover:bg-blue-300 rounded text-center p-2">
                {skill}
              </div>
            );
          })}
        {selectedSkills == "tous" && (
          <>
            {frontend_skills.map((skill) => {
              return (
                <div className="border bg-blue-200 hover:bg-blue-300 rounded text-center p-2">
                  {skill}
                </div>
              );
            })}
            {backend_skills.map((skill) => {
              return (
                <div className="border bg-blue-200 hover:bg-blue-300 rounded text-center p-2">
                  {skill}
                </div>
              );
            })}
            {bdd_skills.map((skill) => {
              return (
                <div className="border bg-blue-200 hover:bg-blue-300 rounded text-center p-2">
                  {skill}
                </div>
              );
            })}
            {env_skills.map((skill) => {
              return (
                <div className="border bg-blue-200 hover:bg-blue-300 rounded text-center p-2">
                  {skill}
                </div>
              );
            })}
          </>
        )}
      </div>
    </Page>
  );
}
