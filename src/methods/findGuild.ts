import { Components, Paths } from "../types/api";
import { Method } from "../util/Method";
import { getResultObject, ResultObject } from "../util/ResultObject";

export class FindGuild extends Method {
  /**
   * Returns the id of the requested guild if found.
   * @example
   * ```typescript
   * const { guild } = await client.findGuild.byName("Mini Squid");
   * console.log(boosters);
   * // 553490650cf26f12ae5bac8f
   * ```
   */
  async byName(
    name: string
  ): Promise<ResultObject<Paths.FindGuild.Get.Responses.$200, "success">> {
    return getResultObject(
      await this.client.call<Paths.Boosters.Get.Responses.$200>("findGuild", {
        byName: name,
      }),
      "success"
    ) as never;
  }
  /**
   * Returns the id of the requested guild if found.
   * @example
   * ```typescript
   * const { guild } = await client.findGuild.byUuid("20934ef9488c465180a78f861586b4cf");
   * console.log(guild);
   * // 553490650cf26f12ae5bac8f
   * ```
   */
  async byUuid(
    uuid: string
  ): Promise<ResultObject<Paths.FindGuild.Get.Responses.$200, "success">> {
    return getResultObject(
      await this.client.call<Paths.Boosters.Get.Responses.$200>("findGuild", {
        byUuid: uuid,
      }),
      "success"
    ) as never;
  }
}
