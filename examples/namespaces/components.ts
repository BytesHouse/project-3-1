type Input = "text" | "password" | "email";

export namespace Components {
  export const InputComponent = (placeholder: string, type: Input) => {
    return `<input type='text' placeholder="${placeholder}"/>`;
  };
  export const ContainerComponent = (style: string, children: string) => {
    return `<div style="${style}">${children}</div>`;
  };
}

const component = Components.InputComponent("Привет мир", "text");
console.log(component);
