import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Components/Detail/Detail";
import Description from "./Components/Description/Description";
import { getDaycareApi } from "../../../../redux/features/services/servicesActions";

function ServicesDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const daycare = useSelector((state) => state.Services?.daycareId);
  useEffect(() => {
    dispatch(getDaycareApi(id));
  }, []);
  return (
    <div className="pt-10">
      <div>
        <div>
          <Detail
            name={daycare?.name}
            img={daycare?.img}
            price_hour={daycare?.price_hour}
            price_day={daycare?.price_day}
            province={daycare?.province}
            locality={daycare?.locality}
            area_code={daycare?.area_code}
            number={daycare?.number}
            mail={daycare?.mail}
            street_name={daycare?.street_name}
            street_number={daycare?.street_number}
          />
        </div>
        <div>
          <Description description={daycare?.description} />
        </div>
      </div>
    </div>
  );
}

export default ServicesDetail;
