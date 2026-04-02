export const translateText = async (text: string) => {
    try {
        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|pt-br`
        );

        if (!response.ok) {
            throw new Error("Erro ao chamar API de tradução");
        }

        const data = await response.json();

        console.log("TRADUÇÃO:", data);

        return data?.responseData?.translatedText ?? text;
    } catch (error) {
        console.error("Erro na tradução:", error);
        return text;
    }
};