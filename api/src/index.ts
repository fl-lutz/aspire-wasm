import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk"

export const handleRequest: HandleRequest = async function (request: HttpRequest): Promise<HttpResponse> {
  console.log("Your request is important to us... Please wait until we processed it.")
  return {
    status: 200,
    headers: { "content-type": "text/plain" },
    body: "Hello from TS-SDK \n"
  }
}
