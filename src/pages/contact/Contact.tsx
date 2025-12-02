import Page from "@/components/page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <Page>
      <Card id="card" className=" w-[730px]">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field
                  orientation={"horizontal"}
                  className=" grid grid-cols-2 "
                >
                  <div className=" grid gap-2">
                    <FieldLabel htmlFor="form-name">Nom</FieldLabel>
                    <Input id="form-name" placeholder="Albert" required />
                  </div>
                  <div className=" grid gap-2">
                    <FieldLabel htmlFor="form-firstname">Prénom</FieldLabel>
                    <Input id="form-firstname" placeholder="Michel" required />
                  </div>
                </Field>

                <Field>
                  <FieldLabel htmlFor="form-reason">Motif</FieldLabel>
                  <Select defaultValue="01">
                    <SelectTrigger id="form-reason">
                      <SelectValue placeholder="Demande d'informations" />
                    </SelectTrigger>
                    <SelectContent className=" bg-(--secondary) border-(--border)">
                      <SelectItem className=" hover:bg-(--input)" value="01">
                        Demande d'informations
                      </SelectItem>
                      <SelectItem className=" hover:bg-(--input)" value="02">
                        Offre d'emploi
                      </SelectItem>
                      <SelectItem className=" hover:bg-(--input)" value="03">
                        Autre...
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="form-message">Message</FieldLabel>
                  <Textarea
                    className=" resize-none h-[200px]"
                    id="form-message"
                    placeholder="Ecrivez ici votre message"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field>
              <Button
                type="submit"
                variant={"outline"}
                className=" cursor-pointer hover:bg-(--bg-color)/25"
              >
                Envoyer
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </Card>
    </Page>
  );
}
