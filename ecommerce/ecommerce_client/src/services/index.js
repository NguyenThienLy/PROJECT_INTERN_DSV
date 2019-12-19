import { CrudApi } from "./crud";

import { AdminApi } from "./apis/admin";
import { ClassApi } from "./apis/class";
import { ClassTimeTableApi } from "./apis/classTimeTable";
import { ContactApi } from "./apis/contact";
import { CourseApi } from "./apis/course";
import { EventApi } from "./apis/event";
import { FeedbackApi } from "./apis/feedback";
import { GalleryApi } from "./apis/gallery";
import { MasonryHomeApi } from "./apis/masonryHome";
import { NewCategoryApi } from "./apis/newCategory";
import { NewsApi } from "./apis/news";
import { PromotionApi } from "./apis/promotion";
import { RankApi } from "./apis/rank";
import { SkillApi } from "./apis/skill";
import { SliderApi } from "./apis/slider";
import { StudentApi } from "./apis/student";
import { StudentTimeTableApi } from "./apis/studentTimeTable";
import { TeacherApi } from "./apis/teacher";
import { TesmonialApi } from "./apis/tesmonial";
import { TimeTableItemApi } from "./apis/timeTableItem";
import { SettingApi } from "./apis/setting";
import { StatisticCourseApi } from "./apis/statisticCourse";
import { StatisticStudentApi } from "./apis/statisticStudent";
import { PackageApi } from "./apis/package";
import { ImgurApi } from "./imgur";
import { RoomApi } from "./apis/room";
import { CourseStudentApi } from './apis/courseStudent'

const crudApi = new CrudApi();

class api {
  constructor() { }
  static imgur = new ImgurApi()
  static admin = new AdminApi();
  static class = new ClassApi();
  static classTimeTable = new ClassTimeTableApi();
  static contact = new ContactApi();
  static course = new CourseApi();
  static event = new EventApi();
  static feedback = new FeedbackApi();
  static gallery = new GalleryApi();
  static masonryHome = new MasonryHomeApi();
  static newCategory = new NewCategoryApi();
  static news = new NewsApi();
  static promotion = new PromotionApi();
  static rank = new RankApi();
  static skill = new SkillApi();
  static slider = new SliderApi();
  static student = new StudentApi();
  static studentTimeTable = new StudentTimeTableApi();
  static teacher = new TeacherApi();
  static tesmonial = new TesmonialApi();
  static timeTableItem = new TimeTableItemApi();
  static setting = new SettingApi();
  static statisticCourse = new StatisticCourseApi();
  static statisticStudent = new StatisticStudentApi();
  static package = new PackageApi()
  static room = new RoomApi()
  static courseStudent = new CourseStudentApi()
}

export { crudApi, api };
