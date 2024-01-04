xdmp.setResponseContentType("text/plain");
const body = xdmp.getRequestBody();
const parsed = JSON.parse(body);
xdmp.login(parsed.username, parsed.password);