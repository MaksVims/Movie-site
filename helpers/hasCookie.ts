export default function hasCookie(key: string) {
  const matches = document.cookie.match(new RegExp(
    `(?:^|; )${key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`,
  ));
  return !!matches;
}
