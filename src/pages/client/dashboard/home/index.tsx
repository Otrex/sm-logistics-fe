import CalendarYellow from "@assets/svg/CalendarYellow";
import LocationYellow from "@assets/svg/LocationYellow";
import Send from "@assets/svg/Send";
import Lay303030 from "@components/layouts/Lay303030";
import { Card, IconRounded } from "@ui-kit/ComponentTags";
import Modal from "@ui-kit/Modal";
import { H2, H3, P } from "@ui-kit/TextTags";
import DashboardHomeController from "./controller";
import { mapStateOrActionToProps } from "@app/hoc";
import Welcome from "@pages/client/components/modals/Welcome";
import { PropState } from "types/app.t";
import { NavLink } from "react-router-dom";

const Home = ({
  stateMngr: state,
}: PropState<DashboardHomeController>) => (
  <>
    {/* Welcome Modal */}
    <Modal
      toggleShow={state.setShowModal}
      show={state.showModal}
      whiteCloseBtn
    >
      <Welcome stateMngr={state} />
    </Modal>

    {/* Home */}
    <H2>Hello, Dammy</H2>
    <P>What would you like to do today?</P>
    <div className="mt-12 mb-16">
      <Lay303030 shorten gapShorten={3} hide={3}>
        <NavLink to={state.to.expressPickup!}>
          <Card accent fullHeight>
            <div>
              <IconRounded>
                <Send />
              </IconRounded>
            </div>
            <div className="p-4">
              <H3 className="mb-4">Express Pickup</H3>
              <P>
                Fast track your item’s drop-off & get an immediate
                dispatch.
              </P>
            </div>
          </Card>
        </NavLink>
        <Card borderColor="#E5E5E5" fullHeight>
          <div>
            <IconRounded>
              <CalendarYellow />
            </IconRounded>
          </div>
          <div className="p-4">
            <H3 className="mb-4">Schedule Pickup</H3>
            <P>
              Have an upcoming logistics needs? Schedule a future
              pickup.
            </P>
          </div>
        </Card>
        <Card
          borderColor="#E5E5E5"
          className="md:block hidden"
          fullHeight
        >
          <div>
            <IconRounded>
              <LocationYellow />
            </IconRounded>
          </div>
          <div className="p-4">
            <H3 className="mb-4">Track Delivery</H3>
            <P>
              Keep track of your item’s status using real-time data.
            </P>
          </div>
        </Card>
      </Lay303030>
    </div>
    <H2>Drop-Off History</H2>
  </>
);

export default mapStateOrActionToProps({
  StateManager: DashboardHomeController,
  Component: Home,
});
