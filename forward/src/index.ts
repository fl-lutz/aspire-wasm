import { HandleRequest, HttpRequest, HttpResponse, Config } from "@fermyon/spin-sdk"

export const handleRequest: HandleRequest = async function (request: HttpRequest): Promise<HttpResponse> {
  const url = "http://localhost:" + Config.get("forward_port");
  console.log(url);
  const response = await fetch(url);
  const body = await response.text();
  //const message = JSON.stringify(body, null, 2);
  return {
    status: 200,
    headers: { "content-type": "text/plain" },
    body: `Response: ${body}`
  }
}
