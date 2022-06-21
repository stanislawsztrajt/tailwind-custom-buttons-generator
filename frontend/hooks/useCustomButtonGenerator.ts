import { useEffect, useState, useCallback } from "react";
import { NextRouter, useRouter } from "next/router";
import Swal from "sweetalert2";

import client from "@pages/api/apollo-client";
import { CREATE_CUSTOM_BUTTON } from "@pages/api/queries/custom-button";

import { IclassName, IcustomButton } from "types/interfaces";

interface IcreateCustomButtonResponse {
  createCustomButton: {
    data: {
      id: string;
    };
  };
}

const useCustomButtonGenerator = (defaultValue: IclassName) => {
  const router: NextRouter = useRouter();

  const [text, setText] = useState<string>();

  const [customClassList, setCustomClassList] = useState<string>("");
  const [classList, setClassList] = useState<string>();
  const [classListObject, setClassListObject] = useState<IclassName>(defaultValue);

  const [isCustomButtonBoxThemeDark, setIsCustomButtonBoxThemeDark] = useState<boolean>(true);

  useEffect(() => {
    setText(document.getElementById("button")?.innerText);
    setClassList(document.getElementById("button")?.className);
  }, []);

  const generateNewValue = useCallback(
    (key: string, value: string) => {
      // parse the value from JSON into an object, because value of <option></option>
      // prevents you from passing an object, only a string
      const newClassListObject: IclassName = { ...classListObject, [key]: JSON.parse(value) };

      const classNameArray: string[] = Object.entries(newClassListObject).map((className) => {
        return `${className[1].prefix}${className[1].value}`;
      });

      setClassList(classNameArray.join(" "));
      setClassListObject(newClassListObject);
    },
    [classListObject]
  );

  const postCustomButton = async () => {
    await Swal.fire({
      title: "Post your button",
      html:
        "<label>Name</label>" +
        "</br>" +
        '<input id="swal-input-name" placeholder="E.g: My button" required maxLength="200" class="swal2-input">' +
        "</br>" +
        "<label></label>" +
        "</br>" +
        "<label>Description</label>" +
        "</br>" +
        `<textarea aria-label="E.g: It's button for landing page" id="swal-input-description" placeholder="E.g: It's button for landing page" required maxLength="1000" class="swal2-textarea" style="width: 20rem"></textarea>`,
      confirmButtonText: "Post",
      showCancelButton: true,
      inputAutoTrim: true,
      focusConfirm: false,
      preConfirm: async () => {
        const inputName: HTMLElement | null = document.getElementById("swal-input-name");
        const inputDescription: HTMLElement | null =
          document.getElementById("swal-input-description");

        let name = "";
        let description = "";

        if (
          inputName instanceof HTMLInputElement &&
          inputDescription instanceof HTMLTextAreaElement
        ) {
          if (!inputName.value) {
            return Swal.showValidationMessage(`Please enter name`);
          }

          if (inputName.value.length < 5) {
            return Swal.showValidationMessage(`Name must be longner than 5 chars`);
          }

          if (inputName.value.length > 200) {
            return Swal.showValidationMessage(`Name must be shorter than 200 chars`);
          }

          if (!inputDescription.value) {
            return Swal.showValidationMessage(`Please enter description`);
          }

          if (inputDescription.value.length < 10) {
            return Swal.showValidationMessage(`Description must be longner than 10 chars`);
          }

          if (inputDescription.value.length > 1000) {
            return Swal.showValidationMessage(`Description must be shorter than 200 chars`);
          }

          name = inputName.value;
          description = inputDescription.value;
        }

        const { data } = await client.mutate<IcreateCustomButtonResponse, IcustomButton>({
          mutation: CREATE_CUSTOM_BUTTON,
          variables: {
            name,
            description,
            code: `<button id="button" className="${classList} ${customClassList}">${text}</button>`,
            defaultValue: JSON.parse(JSON.stringify(classListObject)),
            // from object to stringify and next to json
          },
        });

        await Swal.fire("Success", "Button has been posted", "success");

        router.push(`/custom-buttons/${data?.createCustomButton.data.id}`);
      },
    });
  };

  return {
    text,
    setText,
    customClassList,
    setCustomClassList,
    classList,
    generateNewValue,
    isCustomButtonBoxThemeDark,
    setIsCustomButtonBoxThemeDark,
    postCustomButton,
  };
};

export default useCustomButtonGenerator;
