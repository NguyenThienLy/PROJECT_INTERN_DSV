import { CrudApi } from "../crud";
import * as _ from "lodash";

export class CartApi extends CrudApi {
  constructor() {
    super("statisticCourse");
  }
}