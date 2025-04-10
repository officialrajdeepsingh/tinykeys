// tinykeys.d.ts
declare module "tinykeys" {
  type KeyBindingHandler = (event: KeyboardEvent) => void;

  export function tinykeys(
    target: Window | HTMLElement,
    keyBindings: Record<string, KeyBindingHandler>,
  ): () => void;
}
