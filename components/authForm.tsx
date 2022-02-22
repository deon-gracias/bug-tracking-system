import React, { useState } from "react";
import { useForm } from "@mantine/hooks";

// Icons
import { EnvelopeClosedIcon, LockClosedIcon } from "@modulz/radix-icons";

// Mantine
import {
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
  Text,
  LoadingOverlay,
  Anchor,
  useMantineTheme,
  Title,
} from "@mantine/core";
import Link from "next/link";

export interface AuthenticationFormProps {
  formType: "register" | "login";
  noSubmit?: boolean;
  style?: React.CSSProperties;
}

export function AuthenticationForm({
  formType,
  noSubmit,
  style,
}: AuthenticationFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsOfService: false,
    },

    validationRules: {
      firstName: (value) => formType === "login" || value.trim().length >= 2,
      lastName: (value) => formType === "login" || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
      confirmPassword: (val, values) =>
        formType === "login" || val === (values ? values.password : ""),
      termsOfService: (value) => value,
    },

    errorMessages: {
      email: "Invalid email",
      password:
        "Password should contain 1 number, 1 letter and at least 6 characters",
      confirmPassword: "Passwords don't match. Try again",
    },
  });

  // Submit Handler
  const handleSubmit = () => {
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      setError(
        formType === "register"
          ? "User with this email already exists"
          : "User with this email does not exist"
      );
    }, 3000);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Title mt={25} mb={20}>
        {formType.charAt(0).toUpperCase() + formType.slice(1)}
      </Title>

      <LoadingOverlay visible={loading} />
      {formType === "register" && (
        <Group grow>
          <TextInput
            data-autofocus
            required
            placeholder="First name"
            label="First name"
            {...form.getInputProps("firstName")}
          />

          <TextInput
            required
            placeholder="Last name"
            label="Last name"
            {...form.getInputProps("lastName")}
          />
        </Group>
      )}

      <TextInput
        mt="md"
        required
        placeholder="Email"
        label="Email"
        icon={<EnvelopeClosedIcon />}
        {...form.getInputProps("email")}
      />

      <PasswordInput
        mt="md"
        required
        placeholder="Password"
        label="Password"
        icon={<LockClosedIcon />}
        {...form.getInputProps("password")}
      />

      {formType === "register" && (
        <PasswordInput
          mt="md"
          required
          label="Confirm Password"
          placeholder="Confirm password"
          icon={<LockClosedIcon />}
          {...form.getInputProps("confirmPassword")}
        />
      )}

      {formType === "register" && (
        <Checkbox
          mt="xl"
          label="I agree to Terms of Services"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />
      )}

      {error && (
        <Text color="red" size="sm" mt="sm">
          {error}
        </Text>
      )}

      {!noSubmit && (
        <Group position="apart" mt="xl">
          <Anchor component="p" size="sm">
            {formType === "register" ? (
              <Link href="/login">
                <a>Have an account? Login</a>
              </Link>
            ) : (
              <Link href="/register">
                <a>Don't have an account? Register</a>
              </Link>
            )}
          </Anchor>

          <Button disabled={loading} color="blue" type="submit">
            {formType === "register" ? "Register" : "Login"}
          </Button>
        </Group>
      )}
    </form>
  );
}
