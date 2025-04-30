"use client";

import { useState, useEffect } from "react";
import { Checkbox } from "@heroui/checkbox";
import { Button, ButtonGroup } from "@heroui/button";
import { Accordion, AccordionItem } from "@heroui/accordion";

export default function Home() {
  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [locationChecked, setLocationChecked] = useState(false);

  // 모두 동의 체크박스 변경 시 모든 체크박스 상태 업데이트
  const handleAllCheckChange = (checked: boolean) => {
    setAllChecked(checked);
    setTermsChecked(checked);
    setPrivacyChecked(checked);
    setLocationChecked(checked);
  };

  // 개별 체크박스 상태 변경 시 모두 동의 체크박스 상태 업데이트
  useEffect(() => {
    if (termsChecked && privacyChecked && locationChecked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [termsChecked, privacyChecked, locationChecked]);

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <div className="flex items-center pt-32 font-bold text-2xl">
        서비스를 이용하기 위해서<br></br>
        아래 이용약관에 동의해주세요.
      </div>
      <div className="flex items-center pt-2 font-normal text-sm">
        필수 약관에 동의해야 서비스를 사용할 수 있어요.
      </div>
      <div className="flex items-center pt-9">
        <Checkbox isSelected={allChecked} onValueChange={handleAllCheckChange}>
          <span className="font-normal text-base">모두 동의합니다.</span>
        </Checkbox>
      </div>
      <div className="flex items-center pt-2 font-normal text-sm">
        <Checkbox
          isSelected={termsChecked}
          onValueChange={setTermsChecked}
        ></Checkbox>
        <Accordion>
          <AccordionItem
            key="terms"
            aria-label="이용약관"
            title="(필수) 서비스 이용약관 동의"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex items-center pt-2 font-normal text-sm">
        <Checkbox
          isSelected={privacyChecked}
          onValueChange={setPrivacyChecked}
        />
        <Accordion>
          <AccordionItem
            key="privacy"
            aria-label="개인정보"
            title="(필수) 개인정보 수집 및 이용동의"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex items-center pt-2 font-normal text-sm">
        <Checkbox
          isSelected={locationChecked}
          onValueChange={setLocationChecked}
        />
        <Accordion>
          <AccordionItem
            key="location"
            aria-label="위치기반"
            title="(필수) 위치기반 서비스 이용동의"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
      <div className="fixed bottom-8 left-0 right-0 flex justify-center w-full px-4">
        <Button radius="full" className="w-full max-w-lg bg-[#EDEDED]">
          다음
        </Button>
      </div>
    </>
  );
}
