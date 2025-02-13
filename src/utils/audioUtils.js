export const recordAudio = (recordDuration = 5000) => {
  return new Promise((resolve, reject) => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", (event) => {
          audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          resolve(audioBlob);
          stream.getTracks().forEach((track) => track.stop()); // Stop all tracks after recording
        });

        mediaRecorder.start();

        // Stop the recording after the specified duration
        setTimeout(() => {
          mediaRecorder.stop();
        }, recordDuration);
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
        reject(new Error("Microphone access denied or not supported."));
      });
  });
};
