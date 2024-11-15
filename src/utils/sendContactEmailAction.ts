// src/utils/sendContactEmailAction.ts
export async function sendContactEmailAction(formData: FormData) {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        to: "contact@ozivon.com",
        dynamicTemplateData: {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (response.ok) {
      return { success: true };
    } else {
      return { errorMessage: result.errorMessage || "Failed to send email" };
    }
  } catch (error) {
    console.error("Error in sendContactEmailAction:", error);
    return { errorMessage: "Failed to send email" };
  }
}
