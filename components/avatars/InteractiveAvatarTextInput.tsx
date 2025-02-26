// import { Input, Spinner, Tooltip } from "@nextui-org/react";
// import { Airplane, ArrowRight, PaperPlaneRight } from "@phosphor-icons/react";
import clsx from "clsx";
import { Input } from "../ui/input";
import { Tooltip } from "../ui/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface StreamingAvatarTextInputProps {
  label: string;
  placeholder: string;
  input: string;
  onSubmit: () => void;
  setInput: (value: string) => void;
  endContent?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

export default function InteractiveAvatarTextInput({
  label,
  placeholder,
  input,
  onSubmit,
  setInput,
  endContent,
  disabled = false,
  loading = false,
}: StreamingAvatarTextInputProps) {
  function handleSubmit() {
    if (input.trim() === "") {
      return;
    }
    onSubmit();
    setInput("");
  }

  return (
    // <Input
    //   endContent={
    //     <div className="flex flex-row items-center h-full">
    //       {endContent}
    //       <Tooltip content="Send message">
    //         {loading ? (
    //           // <Spinner
    //           //   className="text-indigo-300 hover:text-indigo-200"
    //           //   size="sm"
    //           //   color="default"
    //           // />
    //           <div className="">...</div>
    //         ) : (
    //           <button
    //             type="submit"
    //             className="focus:outline-none"
    //             onClick={handleSubmit}
    //           >
    //             <FontAwesomeIcon icon={faPaperPlane} />
    //             {/* <PaperPlaneRight
    //               className={clsx(
    //                 "text-indigo-300 hover:text-indigo-200",
    //                 disabled && "opacity-50"
    //               )}
    //               size={24}
    //             /> */}
    //           </button>
    //         )}
    //       </Tooltip>
    //     </div>
    //   }
    //   label={label}
    //   placeholder={placeholder}
    //   // size="lg"
    //   value={input}
    //   onKeyDown={(e : any) => {
    //     if (e.key === "Enter") {
    //       handleSubmit();
    //     }
    //   }}
    //   onValueChange={setInput}
    //   isDisabled={disabled}
    // />
    <div className="">

      <input
        type="text"
        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        disabled={disabled}
      />
      <div className="flex flex-row items-center h-full">
        {endContent}
        {/* <Tooltip content="Send message"> */}
        {/* <Tooltip > */}

          {loading ? (
            <div className="">...</div>
          ) : (
            <button
              type="submit"
              className="focus:outline-none"
              onClick={handleSubmit}
              disabled={disabled}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          )}
        {/* </Tooltip> */}
      </div>
    </div>


  );
}
