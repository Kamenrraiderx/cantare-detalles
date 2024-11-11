
export function setJsonCookie(name: string, data: object|string, days = 7) {
  const parse= getJsonCookie(name) || []
  parse.push(data)
  const jsonData = JSON.stringify(parse);
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(jsonData)}; expires=${expires}; path=/`;

}

export function getJsonCookie(name: string): Array<object|string> | null {
  const cookieMatch = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return cookieMatch ? JSON.parse(decodeURIComponent(cookieMatch[2])) : null;
}