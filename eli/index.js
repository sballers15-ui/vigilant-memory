let times = 5;

for (let i = 0; i < times; i++) {
    setTimeout(() => {
        let msg = new SpeechSynthesisUtterance("V P 4 Supplier... L L S R Williams...");

        msg.pitch = 0.3;
        msg.rate = 0.7;
        msg.volume = 1;
        msg.voice = speechSynthesis.getVoices().find(v =>
            (v.name.toLowerCase().includes('zira') && v.lang === 'en-US') ||
            (v.name.toLowerCase().includes('daniel') && v.lang === 'en-GB')
            (v.name.toLowerCase().includes("fred") && v.lang === 'en-US')
        );

        speechSynthesis.speak(msg);
    }, i * 1000);
}