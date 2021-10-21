import { Dispatch, SetStateAction } from "react";
import { useLocalStorage } from "../use-storage/use-storage";
import * as translations from "./translations";

export interface Translations {
  readonly [key: string]: any;
}

const trans: Translations = translations;

function getNestedTranslation(
  language: string | Dispatch<SetStateAction<string | undefined>> | undefined,
  keys: Array<any>
) {
  if (typeof language === "string") {
    return keys.reduce((obj, key) => {
      return obj?.[key];
    }, trans[language]);
  }
  return;
}

export function useTranslation() {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [fallbackLanguge, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "en"
  );

  const translate = (key: string) => {
    const keys = key.split(".");

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguge, keys) ??
      key
    );
  };
  return {
    language,
    setLanguage,
    fallbackLanguge,
    setFallbackLanguage,
    t: translate,
  };
}
