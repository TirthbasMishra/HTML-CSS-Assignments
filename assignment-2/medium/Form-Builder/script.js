const previewForm = document.getElementById("previewForm");

function addField() {
  const type = document.getElementById("fieldType").value;
  const labelText = document.getElementById("fieldLabel").value.trim();

  if (!labelText) {
    alert("Please enter field label");
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "preview-field";

  const label = document.createElement("label");
  label.innerText = labelText;

  let input;

  if (type === "text") {
    input = document.createElement("input");
    input.type = "text";
  } 
  else if (type === "checkbox") {
    input = document.createElement("input");
    input.type = "checkbox";
  } 
  else if (type === "radio") {
    input = document.createElement("input");
    input.type = "radio";
    input.name = "radio-group";
  }

  wrapper.appendChild(label);
  wrapper.appendChild(input);

  previewForm.appendChild(wrapper);

  document.getElementById("fieldLabel").value = "";
}
