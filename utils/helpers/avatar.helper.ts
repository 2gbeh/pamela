export class AvatarHelper {
  static v2 = (name?: null | string) =>
    name
      ? `https://github.com/2gbeh/fedora/blob/main/assets/uploads/${name}?raw=true`
      : null;

  static m3 = (i: number) =>
    `@/assets/icons-avatar/avatar-${i < 30 ? i + 1 : i - 29}.svg`;
}
