export const whisperTranscription = async (audioBlob) => {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const formData = new FormData();
  formData.append("file", audioBlob, "audio.wav");
  formData.append("model", "whisper-1");

  try {
    const response = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        body: formData,
      }
    );
    console.log("response: ", response);

    if (!response.ok) {
      throw new Error(`Failed to fetch transcription: ${response.statusText}`);
    }

    const data = await response.json();
    return data.text; // The transcribed text
  } catch (error) {
    console.error("Error transcribing audio:", error);
    throw new Error("Failed to transcribe audio.");
  }
};
