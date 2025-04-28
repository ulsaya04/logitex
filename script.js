document.getElementById("tg-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const messageText = document.getElementById("message").value;

    const message = `
📬 Новая заявка с сайта Logitex:
👤 Имя: ${name}
📞 Телефон: ${phone}
📧 Email: ${email}
💬 Сообщение: ${messageText}
    `;

    const token = "7604871085:AAE1E3Em4K9Qjiy3R4OoqBoNfT3USQAGy8s";
    const chat_id = "1603020730";

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("status-msg").innerText = "✅ Заявка успешно отправлена!";
            document.getElementById("tg-form").reset();
        } else {
            document.getElementById("status-msg").innerText = "❌ Ошибка при отправке. Попробуйте позже.";
        }
    })
    .catch(error => {
        console.error("Ошибка:", error);
        document.getElementById("status-msg").innerText = "❌ Сетевая ошибка.";
    });
});
