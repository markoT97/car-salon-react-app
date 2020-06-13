import API from "./../../utils/API";
import { Customer } from "../models/Customer";
import { NaturalPerson } from "../models/NaturalPerson";
import { LegalEntity } from "../models/LegalEntity";

export async function getCustomer(jmbg?: string, pib?: string) {
  var config = {
    params: {
      jmbg: jmbg ? jmbg : undefined,
      pib: pib ? pib : undefined,
    },
  };

  return await API.get("/customers", config);
}

export async function postNaturalPerson(naturalPerson: NaturalPerson) {
  return await API.post("/natural-persons", naturalPerson);
}

export async function postLegalEntity(legalEntity: LegalEntity) {
  console.log("LEGAL");
  console.log(legalEntity);
  return await API.post("/legal-entities", legalEntity);
}

export async function postCustomer(customer: Customer) {
  return await API.post("/customers", customer);
}
