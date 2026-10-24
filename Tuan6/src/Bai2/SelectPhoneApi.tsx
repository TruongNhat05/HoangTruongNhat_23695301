import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Phone } from "../types";
import { fetchPhone } from "../api/phoneApi";
import { Loading } from "../components/Loading";
import { ErrorBox } from "../components/ErrorBox";
import { SelectPhoneApp } from "../Bai1/SelectPhoneApp";

export function SelectPhoneApi() {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const load = useCallback(async () => {
    setError(null);
    setPhone(null);
    setLoading(true);

    try {
      const data = await fetchPhone("1");
      setPhone(data);
    } catch (e: any) {
      setError(e?.message || "Không thể kết nối máy chủ API");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  if (error) {
    return <ErrorBox message={error} onRetry={load} />;
  }

  if (loading || !phone) {
    return <Loading message="Đang tải dữ liệu sản phẩm từ API..." />;
  }

  return <SelectPhoneApp phone={phone} />;
}
