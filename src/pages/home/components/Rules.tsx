import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Grid,
  Box,
  Typography,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import ResponsiveAppBar from "../../navbar/Navbar";

const RulesComponent = () => {
  const Rule1 = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemText
            primary="● 1. Игровой процесс."
            style={{ justifyContent: "left" }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box>
            <Typography whiteSpace={"pre-wrap"}>
              {
                '1.1 Игрокам запрещено использовать: любые чит программы,дающие преимущество, баги, макросы.\nНаказание: бан\n1.2 Игрокам запрещено ставить много (Костров, Ящиков) в одном месте.\nНаказание: Фриз от 20 минут.\n1.3 Игрокам запрещено застраивать зоны спавна.\nНаказание: Снос\n1.4 Запрещено строить антирейд дома.\nВ доме обязательно должен быть вход и проход к каждому из подъемов на следующий этаж.\nНаказание: Снос постройки\n1.5 Игрокам запрещено "фармить" убийства на собственных тиммейтах.\nНаказание: Фриз от 1 часа.\n1.6 Игрокам запрещено закрывать/преграждать проход в дома кольями,воротами.Намеренно заставлять дом ими.За исключением баррикад/ящиков/верстаков/печек\nНаказание: Фриз от 20 минут.\n1.7 Игрокам запрещено засыпать под фундаментами,текстурами,всячески прятать свои слиперы,а также лут любыми способами\nНаказание: Удаление слипера или лута\n1.8 Запрещено использовать баг с печкой,сидеть в животных,ломать кровати багом\nНаказание: Фриз от 20 минут.\n1.9 Игрокам запрещено уничтожать любые объекты убером (Uber Hatchet).\nНаказание: Фриз от 20 минут.\n1.9(2)Игрокам запрещено убивать других игроков с "Uber Hatchet". Наказание:Фриз от 20 минут.'
              }
            </Typography>
          </Box>
        </Collapse>
      </>
    );
  };
  const Rule2 = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemText
            primary="● 2. Кланы."
            style={{ justifyContent: "left" }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box>
            <Typography whiteSpace={"pre-wrap"}>
              {
                '2.1 Запрещено набирать участников в клан багом.\nНаказание: Предупреждение/Расформирование клана.\n2.2 Игрокам запрещено создавать цветные кланы с цветным название "Пример:[color#FFAFB1]Название клана и т.д"\n2.3 Игрокам запрещено создавать аббревиатуры клана с оскорблениями игроков/группы игроков/администрации/сервера.\nНаказание: Предупреждение/Расформирование клана.'
              }
            </Typography>
          </Box>
        </Collapse>
      </>
    );
  };
  const Rule3 = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemText
            primary="● 3. Игровое общение в чате:"
            style={{ justifyContent: "left" }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box>
            <Typography whiteSpace={"pre-wrap"}>
              {
                "3.1 Запрещен флуд. Флудом считается отправка нескольких одинаковых сообщений в короткий промежуток времени.\nНаказание: Мут от 5 до 10 минут.\n3.2 Запрещено проявление расизма и нацизма в любых формах.\nНаказание: Мут от 1 часа до 2.\n3.3 Запрещено обильное оскорбление игроков, администрации (модерации) сервера.\nНаказание: Мут от 20 минут до 1 часа.\n3.5 Запрещено оскорбление сервера в целом.\nНаказание: Мут от 2 часов.\n3.6 Запрещена реклама сторонних проектов в любой форме.\nНаказание: Мут от 6 часов,Бан\n3.7. Запрещено оскорбление родных, игроков,администрации(модерации) сервера.\nНаказание: Мут от 8 часов.\n3.8.Для Администрации и Модерации все наказания умножаются на 2."
              }
            </Typography>
          </Box>
        </Collapse>
      </>
    );
  };
  const Rule4 = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemText
            primary="● 4. Правила для администрации: (модератор,админ)"
            style={{ justifyContent: "left" }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box>
            <Typography whiteSpace={"pre-wrap"}>
              {
                "● 4. Правила для администрации: (модератор,админ)\n4.1 Членам администрации запрещено использование полномочий в целях получения личной выгоды.\n4.2 Членам администрации запрещено иметь свой дом,клан,другое имущество.Убивать игроков.\nНаказание: Снятие с должности. (Только Админ)\n4.3 Членам администрации запрещено выдавать наказания без весомой причины или из-за личной неприязни..\n4.4 Членам администрации обязательно банить указав причину бана и отписывать в беседу.\nНаказание: Снятие с должности или предупреждение.\n4.5 Членам администрации категорически запрещено игнорить игроков или просто просиживать на сервере,а также PVP между игроками.\nНаказание: Снятие с должности.\n4.6 Членам администрации запрещено разведывать чужие дома, телепортируясь к игрокам. Исключение составляет ситуация, если на игрока пожаловались.\n4.7 Членам администрации запрещено Оскорблять или Унижать игроков.\nНаказание: Снятие с должности.\n4.8 Членам администрации запрещено выдавать лут другим игрокам.\nНаказание: Снятие с должности."
              }
            </Typography>
          </Box>
        </Collapse>
      </>
    );
  };
  const Rule5 = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemText
            primary="● 5. Общие правила:"
            style={{ justifyContent: "left" }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box>
            <Typography whiteSpace={"pre-wrap"}>
              {
                "5.1 Главный администратор имеет право не отвечать вам если:\nВы пишите 1 слово = 1 сообщение.\nВы задаете глупый вопрос типа (Дай IP серва).\nВы просите то чем он не занимается.\n5.2 Незнание правил не освобождает вас от ответственности.\n5.3 Администрация не обязана возвращать вам донат или лут, утерянный в результате смерти.\n5.4 Администрация не несет никакой ответственности за ваши поступки в игре и не выступает гарантом\n5.5 Администрация или модерация обязана предоставить скриншот или видеозапись нарушения игрока."
              }
            </Typography>
          </Box>
        </Collapse>
      </>
    );
  };
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Grid
        container
        justifyItems={"center"}
        alignItems={"center"}
        direction={"column"}
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Box
            bgcolor="#60EFE7"
            sx={{
              borderRadius: "10px",
              paddingRight: "12px",
              paddingLeft: "12px",
            }}
          >
            <Box
              sx={{
                margin: "5px",
                position: "relative",
                width: "800px",
              }}
            >
              <Typography
                variant="h5"
                textAlign="center"
                style={{ fontWeight: 1000 }}
              >
                ПРАВИЛА
              </Typography>
              <List>
                <Rule1 />
                <Rule2 />
                <Rule3 />
                <Rule4 />
                <Rule5 />
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default RulesComponent;
