import React from "react";
import { Grid, Divider, ButtonGroup, Button } from "@material-ui/core";
import UserOverview from "./../UserOverview";
import UserDescription from "./../UserDescription";
import { Settings, PersonAdd } from "@material-ui/icons";
import Accordion from "./Accordion";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../redux-store";
import Modal from "./Modal";
import { TABLE_NAMES } from "./../../../shared/configuration";
import InsertSupplierForm from "./Forms/Insert/InsertSupplierForm";
import InsertEquipmentForm from "./Forms/Insert/InsertEquipmentForm";
import InsertEngineForm from "./Forms/Insert/InsertEngineForm";
import InsertBrandForm from "./Forms/Insert/InsertBrandForm";
import InsertModelForm from "./Forms/Insert/InsertModelForm";
import InsertCarForm from "./Forms/Insert/InsertCarForm";
import InsertSellerForm from "./Forms/Insert/InsertSellerForm";

import UpdateSupplierForm from "./Forms/Update/UpdateSupplierForm";
import UpdateEquipmentForm from "./Forms/Update/UpdateEquipmentForm";
import UpdateEngineForm from "./Forms/Update/UpdateEngineForm";
import UpdateBrandForm from "./Forms/Update/UpdateBrandForm";
import UpdateModelForm from "./Forms/Update/UpdateModelForm";
import UpdateCarForm from "./Forms/Update/UpdateCarForm";
import UpdateSellerForm from "./Forms/Update/UpdateSellerForm";
import {
  setInsertModalVisibility,
  setUpdateModalVisibility,
} from "../../../redux-store/modals/actions";

const {
  SUPPLIERS,
  EQUIPMENTS,
  ENGINES,
  BRANDS,
  MODELS,
  CARS,
  SELLERS,
  IMAGES,
} = TABLE_NAMES;

function AdminPanel() {
  const insertModalOpen = useSelector(
    (state: AppState) => state.modals.insertModal.visibility
  );

  const updateModalOpen = useSelector(
    (state: AppState) => state.modals.updateModal.visibility
  );

  const selectedTable = useSelector(
    (state: AppState) => state.tables.selectedTable
  );

  const currentData = useSelector(
    (state: AppState) => state.tables.updateTable
  );

  const dispatch = useDispatch();

  const getInsertModal = () => {
    switch (selectedTable) {
      case SUPPLIERS:
        return <InsertSupplierForm />;
      case EQUIPMENTS:
        return <InsertEquipmentForm />;
      case ENGINES:
        return <InsertEngineForm />;
      case BRANDS:
        return <InsertBrandForm />;
      case MODELS:
        return <InsertModelForm />;
      case CARS:
        return <InsertCarForm />;
      case SELLERS:
        return <InsertSellerForm />;
      default:
        return "";
    }
  };

  const getUpdateModal = () => {
    switch (selectedTable) {
      case SUPPLIERS:
        return <UpdateSupplierForm currentData={currentData} />;
      case EQUIPMENTS:
        return <UpdateEquipmentForm currentData={currentData} />;
      case ENGINES:
        return <UpdateEngineForm currentData={currentData} />;
      case BRANDS:
        return <UpdateBrandForm currentData={currentData} />;
      case MODELS:
        return <UpdateModelForm currentData={currentData} />;
      case CARS:
        return <UpdateCarForm currentData={currentData} />;
      case SELLERS:
        return <UpdateSellerForm currentData={currentData} />;
      default:
        return "";
    }
  };

  const modalTitle = selectedTable
    .toString()
    .toLowerCase()
    .substring(0, selectedTable.toString().toLowerCase().length - 1);

  return (
    <>
      <Grid item xs={12}>
        <UserOverview />
      </Grid>
      <Grid item>
        <UserDescription />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button>
            <Settings /> Data management
          </Button>
          <Button>
            <PersonAdd /> Register new seller
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={12}>
        <h1>
          <Settings /> Data management
        </h1>
        <Accordion />
      </Grid>
      <Modal
        title={"Insert new " + modalTitle}
        open={insertModalOpen}
        close={() => dispatch(setInsertModalVisibility(false))}
      >
        {getInsertModal()}
      </Modal>
      <Modal
        title={"Update " + modalTitle}
        open={updateModalOpen}
        close={() => dispatch(setUpdateModalVisibility(false))}
      >
        {getUpdateModal()}
      </Modal>
    </>
  );
}

export default AdminPanel;
