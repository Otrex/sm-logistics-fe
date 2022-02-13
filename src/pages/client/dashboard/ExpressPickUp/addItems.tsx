import { P14Bold } from "@pages/landing/components/StyledComponents";
import { AccentButton, Button } from "@ui-kit/ComponentTags";
import Select from "@ui-kit/Select";
import { A, P } from "@ui-kit/TextTags";
import DashboardExpressPickUpController from "./controller";

const AddItem = (state: DashboardExpressPickUpController) => {
  return (
    <div title="Item Details">
      <div>
        <P14Bold>What are You Sending?</P14Bold>

        {state.items.map((item, idx) => (
          <div className="w-full" key={idx}>
            {idx > 0 ? (
              <P14Bold className="md:mt-12 mt-6">
                {" "}
                Item {idx + 1}{" "}
              </P14Bold>
            ) : (
              <></>
            )}
            <div className="flex md:flex-row flex-col">
              <div className="w-full md:w-1/2 md:mt-12 mt-6 mb-9 md:mb-0 md:mr-6">
                <Select
                  label="Category"
                  defaultValue={item.category}
                  options={state.categoryOptions}
                  onChange={state.setItemCategory(idx)}
                />
              </div>
              <div className="w-full md:w-1/2 md:mt-12 mt-6 mb-9 md:mb-0 md:ml-6">
                <Select
                  label="Quantity"
                  defaultValue={item.category}
                  options={state.categoryOptions}
                  onChange={state.setItemQuantity(idx)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-9 md:mt-12 mt-6 md:mb-0 md:mr-6 md:pr-6 pr-0">
              <Select
                label="Weight"
                defaultValue={item.category}
                options={state.categoryOptions}
                onChange={state.setItemWeight(idx)}
              />
            </div>
          </div>
        ))}
        <div className="flex md:flex-row flex-col md:mt-20 mt-9">
          <P>Have more items for same destination? </P>{" "}
          <A accent underline onClick={state.addMoreItems}>
            Add More
          </A>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-80">
        <Button
          className="hidden md:inline-block"
          width={"auto"}
          onClick={state.cancel}
          // disabled={!state.isReady}
        >
          {" "}
          Cancel{" "}
        </Button>
        <AccentButton
          className="md:w-auto w-full"
          onClick={state.continue}
          disabled={!state.isReady.first}
          nowidth
        >
          {" "}
          Continue{" "}
        </AccentButton>
      </div>
    </div>
  );
};

export default AddItem;
