// import { Input, Spinner, Tooltip } from "@nextui-org/react";
// import { Airplane, ArrowRight, PaperPlaneRight } from "@phosphor-icons/react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ">

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
