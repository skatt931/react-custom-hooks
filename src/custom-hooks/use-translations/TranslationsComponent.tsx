import { useTranslation } from "./useTranslations";

export function TraslationsComponent(): JSX.Element {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  console.log("setFallbackLanguage", setFallbackLanguage);

  return (
    <>
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>
      <div>{t("something.inside.value")}</div>
      <div>{t("something.different")}</div>
      <button onClick={() => setLanguage("en")}>English lang</button>
      <button onClick={() => setLanguage("sp")}>Spanish lang</button>
      <button onClick={() => setLanguage("ua")}>Ukrainian lang</button>
    </>
  );
}
