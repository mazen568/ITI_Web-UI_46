export type Operation = {
    id: number;
    action: "toggle" | "delete" | "edit";
    title: string;
}