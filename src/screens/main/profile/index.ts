import {routes} from '../../../constants';
import {Screen} from '../../../types';
import Message from '../message/Messages';
import AboutApp from './AboutApp';
import BecomeVIP from './BecomeVIP';
import HelpCenter from './HelpCenter';
import Contact_us from './HelpCenter/Contact_us';
import FAQ from './HelpCenter/FAQ';
import MyProfile from './MyProfile';
import PostDetail from './MyProfile/components/PostDetail';
import Notification from './Notification';
import Payments_method from './Payment-method';
import ProfileUser from './Profile-User';
import PostDetailUser from './Profile-User/components/PostDetailUser';
import Security from './Security';
import Update_Profile from './Update-profile';

export {default as Profile} from './Profile';

export const profileScreens: Screen[] = [
  {
    name: routes.HELPCENTER,
    component: HelpCenter,
  },
  {
    name: routes.SECURITY,
    component: Security,
  },
  {
    name: routes.MYPROFILE,
    component: MyProfile,
  },
  {
    name: routes.NOTIFICATION,
    component: Notification,
  },
  {
    name: routes.PAYMENTSMETHOD,
    component: Payments_method,
  },
  {
    name: routes.BECOMEVIP,
    component: BecomeVIP,
  },
  {
    name: routes.ABOUTAPP,
    component: AboutApp,
  },
  {
    name: routes.FAQ,
    component: FAQ,
  },
  {
    name: routes.CONTACTUS,
    component: Contact_us,
  },
  {
    name: routes.UPDATE_PROFILE2,
    component: Update_Profile,
  },
  {
    name: routes.POSTDETAIL,
    component: PostDetail,
  },
  {
    name: routes.PROFILEUSER,
    component: ProfileUser,
  },
  {
    name: routes.POSTDETAILUSERS,
    component: PostDetailUser,
  },
  {
    name: routes.MESSAGES,
    component: Message,
  },
];