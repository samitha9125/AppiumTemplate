import * as WD from "webdriverio";

type Client = WebdriverIO.Browser;
type Type = "click" | "setValue";
type Id = string;
type Value = string;
type Select = WebdriverIO.Element & { error: Error & { error: string } };

export async function action(
  client: Client,
  type: Type,
  id: Id,
  value?: Value
) {
  const select = (await client.$(`~${id}`)) as Select;
  const exist = await select.isExisting();
  if (!exist) {
    throw new Error(`Element with id: ${id} not found`);
  }

  switch (type) {
    case "click":
      console.log(`Going to Clicked on ${id}`);
      await select.click();
      console.log(`Clicked on ${id}`);
      break;
    case "setValue":
      console.log(`Going to set value on ${id}`);
      await select.setValue(value);
      console.log(`Set value on ${id}`);
      break;
    default:
      break;
  }
}
