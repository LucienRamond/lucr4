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
import { Button } from "@/components/ui/button";

export default function Skills() {
  const [selectedSkills, setSelectedSkills] = useState("tous");

  return (
    <Page>
      <Select onValueChange={(value) => setSelectedSkills(value)}>
        <SelectTrigger className="min-w-[250px] mb-2">
          <SelectValue placeholder="Tous" />
        </SelectTrigger>
        <SelectContent className=" bg-(--secondary) border-(--border)">
          <SelectGroup>
            <SelectItem className=" hover:bg-(--input)" value="tous">
              Tous
            </SelectItem>
            <SelectItem className=" hover:bg-(--input)" value="front">
              Développement frontend
            </SelectItem>
            <SelectItem className=" hover:bg-(--input)" value="back">
              Développement backend
            </SelectItem>
            <SelectItem className=" hover:bg-(--input)" value="bdd">
              Base de données
            </SelectItem>
            <SelectItem className=" hover:bg-(--input)" value="env">
              Environnement de travail
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="min-w-[50vw] grid gap-2 grid-cols-3">
        {selectedSkills == "front" &&
          frontend_skills.map((skill) => {
            return <Button key={skill}>{skill}</Button>;
          })}
        {selectedSkills == "back" &&
          backend_skills.map((skill) => {
            return <Button key={skill}>{skill}</Button>;
          })}
        {selectedSkills == "bdd" &&
          bdd_skills.map((skill) => {
            return <Button key={skill}>{skill}</Button>;
          })}
        {selectedSkills == "env" &&
          env_skills.map((skill) => {
            return <Button key={skill}>{skill}</Button>;
          })}
        {selectedSkills == "tous" && (
          <>
            {frontend_skills.map((skill) => {
              return <Button key={skill}>{skill}</Button>;
            })}
            {backend_skills.map((skill) => {
              return <Button key={skill}>{skill}</Button>;
            })}
            {bdd_skills.map((skill) => {
              return <Button key={skill}>{skill}</Button>;
            })}
            {env_skills.map((skill) => {
              return <Button key={skill}>{skill}</Button>;
            })}
          </>
        )}
      </div>
    </Page>
  );
}
